export const SymptomForm = [
  {
    label: 'Age / عمر',
    value: 'age',
    type: 'string'
  },
  {
    label: 'Taille / حجم',
    value: 'size',
    type: 'string'
  },
  {
    label: 'Poids / الوزن',
    value: 'weight',
    type: 'string'
  },
  {
    label: 'Fièvre / حمى (>38°C)',
    value: 'fever',
    type: 'number'
  },
  {
    label: 'Fièvre subjective / حمى ذاتية',
    value: 'subjectiveFever',
    type: 'number'
  },
  {
    label: 'Frissons / قشعريرة',
    value: 'chills',
    type: 'number'
  },
  {
    label: 'Douleur musculaire / آلام على مستوى العضلات',
    value: 'muscleAches',
    type: 'number'
  },
  {
    label: 'écoulement nasale / سيلان الأنف',
    value: 'runnyNose',
    type: 'number'
  },
  {
    label: 'Maux de gorge / إلتهاب في الحلق',
    value: 'soreThroat',
    type: 'number'
  },
  {
    label: 'Toux / سعال',
    value: 'cough',
    type: 'number'
  },
  {
    label: 'Essoufflement / ضيق في التنفس',
    value: 'shortnessBreath',
    type: 'number'
  },
  {
    label: 'Nausées ou vomissements / غثيان أو تقيء',
    value: 'nauseaVomiting',
    type: 'number'
  },
  {
    label: 'Maux de tête / صداع ',
    value: 'headache',
    type: 'number'
  },
  {
    label: 'Douleur abdominale / وجع على مستوى البطن',
    value: 'abdominalPain',
    type: 'number'
  },
  {
    label: 'Diarrhée / إسهال',
    value: 'diarrhea',
    type: 'number'
  },
  {
    label: 'Autres symptômes, précisez / أعراض أخرى ، حدد',
    value: 'other',
    type: 'string'
  }
];

export const MedicalExtension = [
  {
    label: 'Maladie pulmonaire chronique / مرض رئوي مزمن',
    value: 'chronicLungDisease',
    type: 'number'
  },
  {
    label: 'Diabète / داء السكري',
    value: 'diabeteMellitus',
    type: 'number'
  },
  {
    label: 'Maladie cardiovasculaire / أمراض القلب والأوعية الدموية',
    value: 'cardiavascularDisease',
    type: 'number'
  },
  {
    label: 'Maladie rénale cardiovasculaire / أمراض الكلى والأوعية الدموية',
    value: 'cardiavascularRenalDisease',
    type: 'number'
  },
  {
    label: 'Maladie hépatique cardiovasculaire / أمراض الكبد القلبية الوعائية',
    value: 'cardiavascularLiverDisease',
    type: 'number'
  },
  {
    label: 'immunodépression / حالة نقص المناعة',
    value: 'immunocompromised',
    type: 'number'
  },
  {
    label: 'Déficience neurologique ou intellectuelle / ضعف عصبي / فكري ',
    value: 'neurologic',
    valueRadioBox: 'radio',
    valueInput: 'specify',
    type: 'group'
  },
  {
    label: 'Autre maladie chronique / مرض مزمن آخر',
    value: 'otherChronicDiseases',
    valueRadioBox: 'radio',
    valueInput: 'specify',
    type: 'group'
  },
  {
    label: 'Autre maladie chronique / إذا كانت الأنثى حامل حاليا',
    value: 'pregnant',
    type: 'number'
  },
  {
    label: 'Si femelle, actuellement enceinte / إذا كانت الأنثى حامل حاليا',
    value: 'pregnant',
    type: 'number'
  },
  {
    label: 'Fumeur actuel / مدخن حالي',
    value: 'currentSmoker',
    type: 'number'
  },
  {
    label: 'Ancien fumeur / مدخن سابق',
    value: 'formerSmoker',
    type: 'number'
  }
];

export const Testing = [
  {
    label: 'Grippe rapid Ag',
    value: 'influenzaRapid',
    valueType: 'type',
    type: 'group'
  },
  {
    label: 'Grippe PCR',
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
    label: 'H.métapneumovirus',
    value: 'metapneumovirus',
    type: 'number'
  },
  {
    label: 'Para-influenza',
    value: 'paraInfluenza',
    type: 'number'
  },
  {
    label: 'Adénovirus',
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
    label: 'Mycoplasma pneumoniae',
    value: 'mPneumoniae',
    type: 'number'
  },
  {
    label: 'Chlamydophila pneumoniae',
    value: 'cPneumoniae',
    type: 'number'
  },


  {
    label: 'autres tests, précisez',
    value: 'other',
    type: 'group',
    valueType: 'string'
  }
];

export const Specimens = [
  {
    label: 'Échantillon nasale / عينة من الأنف',
    value: 'NPSwab',
    type: 'object'
  },
  {
    label: 'Échantillon oral / عينة من الفم',
    value: 'OPSwab',
    type: 'object'
  },
  {
    label: 'salive / لعاب',
    value: 'Sputum',
    type: 'object'
  },
  {
    label: 'autres, précisez / أخرى ، حدد:',
    value: 'other',
    type: 'string'
  },
];
