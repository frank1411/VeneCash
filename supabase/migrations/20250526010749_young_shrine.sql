/*
  # Create pronosticos table

  1. New Tables
    - `pronosticos`
      - `id` (uuid, primary key)
      - `match_title` (text)
      - `prediction_type` (text)
      - `odds` (decimal)
      - `is_active` (boolean)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `pronosticos` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS pronosticos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  match_title text NOT NULL,
  prediction_type text NOT NULL,
  odds decimal NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE pronosticos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON pronosticos
  FOR SELECT
  TO public
  USING (true);