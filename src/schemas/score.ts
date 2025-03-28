import { z } from "zod";

export const scoreFormSchema = z.object({
  rank: z.string()
    .min(1, "Rank is required")
    .regex(/^\d+$/, "Must be a number")
    .refine((val) => parseInt(val) > 0, "Rank must be greater than 0"),
  
  percentile: z.string()
    .min(1, "Percentile is required")
    .regex(/^\d+$/, "Must be a number")
    .refine((val) => {
      const num = parseInt(val);
      return num >= 0 && num <= 100;
    }, "Percentile must be between 0 and 100"),
  
  currentScore: z.string()
    .min(1, "Score is required")
    .regex(/^\d+$/, "Must be a number")
    .refine((val) => {
      const num = parseInt(val);
      return num >= 0 && num <= 15;
    }, "Score must be between 0 and 15"),
});

export type ScoreFormData = z.infer<typeof scoreFormSchema>;