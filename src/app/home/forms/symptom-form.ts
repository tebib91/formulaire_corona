export const SymptomForm = [
  {
    label: 'Fever >10.4F (380)°c',
    value: 'fever',
    type: 'number'
  },
  {
    label: 'Subjective fever (felt feverish)',
    value: 'subjectiveFever',
    type: 'number'
  },
  {
    label: 'Chills',
    value: 'chills',
    type: 'number'
  },
  {
    label: 'Muscle aches (myalgia)',
    value: 'muscleAches',
    type: 'number'
  },
  {
    label: 'Runny nose (rhinorrhea)',
    value: 'runnyNose',
    type: 'number'
  },
  {
    label: 'Sore throat',
    value: 'soreThroat',
    type: 'number'
  },
  {
    label: 'Cough (new onset or worsening of chronic cough)',
    value: 'cough',
    type: 'number'
  },
  {
    label: 'Shortness of breath (dyspnea)',
    value: 'shortnessBreath',
    type: 'number'
  },
  {
    label: 'Nausea or vomiting',
    value: 'nauseaVomiting',
    type: 'number'
  },
  {
    label: 'Headache',
    value: 'headache',
    type: 'number'
  },
  {
    label: 'Abdominal pain',
    value: 'abdominalPain',
    type: 'number'
  },
  {
    label: 'Diarrhea ( ≥ 3 looser/looser than normal stools/24hr period)',
    value: 'diarrhea',
    type: 'number'
  },
  {
    label: 'Other, specify',
    value: 'other',
    type: 'string'
  }
];

export const MedicalExtension = [
  {
    label: 'Chronic Lung Disease (asthma/emphysema/COPD)',
    value: 'chronicLungDisease',
    type: 'number'
  },
  {
    label: 'Diabetes Mellitus',
    value: 'diabeteMellitus',
    type: 'number'
  },
  {
    label: 'Cardiavascular disease',
    value: 'cardiavascularDisease',
    type: 'number'
  },
  {
    label: 'Cardiavascular Renal disease',
    value: 'cardiavascularRenalDisease',
    type: 'number'
  },
  {
    label: 'Cardiavascular Liver disease',
    value: 'cardiavascularLiverDisease',
    type: 'number'
  },
  {
    label: 'Immunocompromised Condition',
    value: 'immunocompromised',
    type: 'number'
  },
  {
    label: 'Neurologic/neurodevelopmental/intellectual disability',
    value: 'neurologic',
    valueRadioBox: 'radio',
    valueInput: 'specify',
    type: 'group'
  },
  {
    label: 'Other chronic diseases',
    value: 'otherChronicDiseases',
    valueRadioBox: 'radio',
    valueInput: 'specify',
    type: 'group'
  },
  {
    label: 'If female, currently pregnant',
    value: 'pregnant',
    type: 'number'
  },
  {
    label: 'If female, currently pregnant',
    value: 'pregnant',
    type: 'number'
  },
  {
    label: 'Current smoker',
    value: 'currentSmoker',
    type: 'number'
  },
  {
    label: 'Former smoker',
    value: 'formerSmoker',
    type: 'number'
  }
];

export const Testing = [
  {
    label: 'Influenza rapid Ag',
    value: 'influenzaRapid',
    valueType: 'type',
    type: 'group'
  },
  {
    label: 'Influenza PCR',
    value: 'influenzaPCR',
    valueType: 'type',
    type: 'group'
  },
  {
    label: 'RSV',
    value: 'rsv',
    type: 'number'
  },
  {
    label: 'H. metapneumovirus',
    value: 'metapneumovirus',
    type: 'number'
  },
  {
    label: 'Parainfluenza (1-4)',
    value: 'paraInfluenza',
    type: 'number'
  },
  {
    label: 'Adenovirus',
    value: 'adenovirus',
    type: 'number'
  },
  {
    label: 'Rhinovirus/enterovirus',
    value: 'RhinoEntervirus',
    type: 'number'
  },
  {
    label: 'Coronavirus (OC43, 229E, HKU1, NL63)',
    value: 'coronavirusType',
    type: 'number'
  },
  {
    label: 'M. pneumoniae',
    value: 'mPneumoniae',
    type: 'number'
  },
  {
    label: 'C. pneumoniae',
    value: 'cPneumoniae',
    type: 'number'
  },


  {
    label: 'Other, Specify:',
    value: 'other',
    type: 'group',
    valueType: 'string'
  }
];

export const Specimens = [
  {
    label: 'NP Swab',
    value: 'NPSwab',
    type: 'object'
  },
  {
    label: 'OP Swab',
    value: 'OPSwab',
    type: 'object'
  },
  {
    label: 'Sputum',
    value: 'Sputum',
    type: 'object'
  },
  {
    label: 'Other, Specify:',
    value: 'other',
    type: 'string'
  },
];
