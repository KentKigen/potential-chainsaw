import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');
const leadsFile = path.join(dataDir, 'leads.json');

// Ensure data directory and file exist
async function initDataFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(leadsFile);
    } catch {
      await fs.writeFile(leadsFile, JSON.stringify([]));
    }
  } catch (error) {
    console.error('Data initialization error:', error);
  }
}

initDataFile();

// Demo SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER || 'demo@ethereal.email',
    pass: process.env.SMTP_PASS || 'demopassword'
  }
});

app.post('/api/leads', async (req, res) => {
  try {
    const lead = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };

    const data = await fs.readFile(leadsFile, 'utf-8');
    const leads = JSON.parse(data);
    leads.push(lead);
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2));

    // Send confirmation email
    console.log(`Sending confirmation email to: ${lead.email}`);
    // In actual production, uncomment below
    /*
    await transporter.sendMail({
      from: '"Homebase KE" <noreply@homebase.co.ke>',
      to: lead.email,
      subject: 'Viewing Request Confirmation - Homebase KE',
      text: `Hello ${lead.name},\n\nWe have received your viewing request for ${lead.date}. Our agent will contact you shortly at ${lead.phone}.\n\nBest,\nHomebase KE Team`,
    });
    */

    res.status(201).json({ success: true, message: 'Lead captured successfully', leadId: lead.id });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

let cachedRate = null;
let lastFetched = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour
const FALLBACK_KESTOUSD = 0.0075; // Approx 1 USD = 133 KES

app.get('/api/rates', async (req, res) => {
  try {
    const now = Date.now();
    if (cachedRate && lastFetched && (now - lastFetched) < CACHE_DURATION) {
      return res.json({ kesToUsd: cachedRate });
    }

    // Replace with an actual API endpoint fetching exchange rates, e.g. Open Exchange Rates
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    if (apiKey) {
      // Mock fetch depending on API provider
      // const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/KES`);
      // const data = await response.json();
      // cachedRate = data.conversion_rates.USD; 
      
      // Simulate fetch for now
      cachedRate = FALLBACK_KESTOUSD;
    } else {
      cachedRate = FALLBACK_KESTOUSD;
    }
    
    lastFetched = now;
    res.json({ kesToUsd: cachedRate });
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    res.json({ kesToUsd: FALLBACK_KESTOUSD, fallback: true });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
