-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  entity_type TEXT NOT NULL,
  interest TEXT NOT NULL,
  title TEXT,
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for facility application submissions
CREATE TABLE public.facility_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Entity Information
  entity_type TEXT NOT NULL,
  business_name TEXT NOT NULL,
  registration_number TEXT,
  date_of_incorporation DATE,
  industry TEXT NOT NULL,
  
  -- Business Details
  annual_revenue TEXT,
  employee_count TEXT,
  years_in_business TEXT,
  export_experience TEXT,
  
  -- Facility Request
  facility_type TEXT NOT NULL,
  amount_requested DECIMAL(15, 2),
  currency TEXT DEFAULT 'GHS',
  purpose TEXT NOT NULL,
  repayment_period TEXT,
  
  -- Contact Information
  contact_name TEXT NOT NULL,
  contact_title TEXT,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  
  -- Additional Info
  additional_info TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'submitted',
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.facility_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for public submissions (anyone can submit)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can submit facility application"
ON public.facility_applications
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_facility_applications_updated_at
BEFORE UPDATE ON public.facility_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();