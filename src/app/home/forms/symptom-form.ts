export const SymptomForm = [
  {
    type: 'number',
    value: 'fever',
    label: 'Fever >10.4F (380)°c'
  },
  {
    type: 'number',
    value: 'subjectiveFever',
    label: 'Subjective fever (felt feverish)'
  },
  {
    type: 'number',
    value: 'chills',
    label: 'Chills'
  },
  {
    type: 'number',
    value: 'muscleAches',
    label: 'Muscle aches (myalgia)'
  },
  {
    type: 'number',
    value: 'runnyNose',
    label: 'Runny nose (rhinorrhea)'
  },
  {
    type: 'number',
    value: 'soreThroat',
    label: 'Sore throat'
  },
  {
    type: 'number',
    value: 'cough',
    label: 'Cough (new onset or worsening of chronic cough)'
  },
  {
    type: 'number',
    value: 'shortnessBreath',
    label: 'Shortness of breath (dyspnea)'
  },
  {
    type: 'number',
    value: 'nauseaVomiting',
    label: 'Nausea or vomiting'
  },
  {
    type: 'number',
    value: 'headache',
    label: 'Headache'
  },
  {
    type: 'number',
    value: 'abdominalPain',
    label: 'Abdominal pain'
  },
  {
    type: 'number',
    value: 'diarrhea',
    label: 'Diarrhea ( &#8805; 3 looser/looser than normal stools/24hr period)'
  },
  {
    type: 'string',
    value: 'other',
    label: 'Other, specify'
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
    value: 'cPneumoniae',
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
