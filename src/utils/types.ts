export enum AgeGroup {
  _25_TO_39 = "25 to 39",
  _40_TO_49 = "40 to 49",
  _50_TO_69 = "50 to 69",
  _ABOVE_70 = "Above 70",
}

export enum Sex {
  FEMALE = "Female",
  MALE = "Male",
}

export enum FamilyHistory {
  BREAST_CANCER = "Breast cancer",
  COLORECTAL_CANCER = "Colorectal cancer",
  NOSE_CANCER = "Nasopharyngeal cancer",
  PROSTATE_CANCER = "Prostate cancer",
  DIABETES = "Diabetes",
  HIGH_CHOLESTROL = "High cholestrol",
  CARDIOVASCULAR_DISEASE = "Cardiovascular disease",
  CEREBRAL_ANEURYSM = "Cerebral aneurysm",
  KIDNEY_DISEASE = "Kidney disease",
}

export enum MedicalHistory {
  OBESITY = "Obesity",
  DIABETES = "Diabetes",
  HIGH_CHOLESTROL = "High cholestrol",
  HIGH_BLOOD_PRESSURE = "High blood pressure",
  CARDIOVASCULAR_DISEASE = "Cardiovascular disease",
  TUBERCULOSIS = "Tuberculosis",
  LYNCH_SYNDROME = "Lynch syndrome",
  HEPATITIS_B = "Hepatitis B",
  LIVER_CIRRHOSIS = "Liver cirrhosis",
  COLORECTAL_POLYPS = "Colorectal polyps",
  INFLAMMATORY_BOWEL_DISEASE = "Inflammatory bowel disease",
  SUBARACHNOID_HAEMORRHAGE = "Subarachnoid haemorrhage",
  AUTOSOMAL_DOMINANT_POLYSISTIC_KIDNEY_DISEASE = "Autosomal dominant polycystic kidney disease (ADPKD)",
  HIV = "HIV",
  STIS = "STIs",
  AUTOIMMUNE_DISEASE = "Autoimmune disease",
}

export enum MedicalHistoryFemale {
  PREGNANCY = "Pregnancy",
  MENOPAUSE = "Menopause",
  BRCA = "BRCA",
  OVARIAN_CANCER = "Ovarian cancer",
  ENDOMETRIAL_CANCER = "Endometrial cancer",
  POLYCYSTIC_OVARY_DISEASE = "Polycystic ovary disease",
}

export enum Lifestyle {
  SMOKING = "Smoking",
  HIGH_RISK_SEX = "Active sexual activity with multiple partners",
}

export type SurveyOptionKey = 'ageGroup' | 'sex' | 'lifestyle' | 'familyHistory' | 'medicalHistory'

export type SearchOptionKey = 'searchTestCategory' | 'searchDiseaseType'
