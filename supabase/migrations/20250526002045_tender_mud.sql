/*
  # Create predictions table

  1. New Tables
    - `predictions`
      - `id` (uuid, primary key)
      - `match` (text, match details)
      - `prediction` (text, prediction details)
      - `confidence` (decimal, odds/confidence value)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `predictions` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS predictions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  match text NOT NULL,
  prediction text NOT NULL,
  confidence decimal NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON predictions
  FOR SELECT
  TO public
  USING (true);