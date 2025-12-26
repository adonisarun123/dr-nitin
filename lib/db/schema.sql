-- Create leads table for storing booking form submissions
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    
    -- Form fields
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    condition VARCHAR(100) NOT NULL,
    preferred_location VARCHAR(100) NOT NULL,
    preferred_date DATE,
    message TEXT,
    
    -- Metadata
    source VARCHAR(50) NOT NULL DEFAULT 'website', -- Tracks where the lead came from (website, google-meta-ads, etc.)
    utm_params JSONB, -- Stores UTM parameters for tracking
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email) WHERE email IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
