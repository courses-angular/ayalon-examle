export class ClaimsCenterModel {
  constructor(
    public title: string,
    public claims: IClaim[]
  ) {
  }
}

export class IClaim {
  id: string;
  aHref: string;
  aText: string;
  iconImg: string;
  iconAlt: string;
  children? : IClaimChild[];
}
export class IClaimChild {
  id: string;
  aHref: string;
  aText: string;
  iconImg: string;
  iconAlt: string;
  extraInfo?: string
}

export const claimsCenter = new ClaimsCenterModel(' באיזה נושא ברצונך להגיש תביעה?', [
  {
    "id": "ca46cf42-7059-4bf6-a05a-27ec43bf0c49",
    "aHref": 'bituah_briyut',
    "aText": 'ביטוח בריאות',
    "iconImg": 'ic-40-px-insurance-health.svg',
    "iconAlt": 'ביטוח בריאות',
    "children": [
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": 'התייעצות שלא לצרכי ניתוח',
        "aText": 'התייעצות שלא לצרכי ניתוח',
        "iconImg": 'ic-48-px-doctor.svg',
        "iconAlt": 'התייעצות שלא לצרכי ניתוח',
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'טיפול',
        "iconImg": 'ic-40-px-treatment.svg',
        "iconAlt": 'טיפול',
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'ניתוחים',
        "iconImg": 'ic-40-px-operations.svg',
        "iconAlt": 'ניתוחים',
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'תרופות שאינן בסל הבריאות',
        "iconImg": 'ic-40-px-medication.svg',
        "iconAlt": 'תרופות שאינן בסל הבריאות',
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'השתלות',
        "iconImg": 'ic-40-px-transplant.svg',
        "iconAlt": 'השתלות',
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'בדיקה רפואית',
        "iconImg": 'ic-40-px-exam.svg',
        "iconAlt": 'בדיקה רפואית',
        "extraInfo": 'פיזיוטרפיה, שיאצו, בדיקת מעבדה וכו׳'
      },
      {
        "id": 'ca46cf42-7059-4bf6-a05a-27ec43bf0c49',
        "aHref": '#',
        "aText": 'מחלות קשות',
        "iconImg": 'ic-40-px-illnes.svg',
        "iconAlt": 'מחלות קשות',
      },

    ]
  }, {
    "id": "d8d40a99-de00-4f91-8f2b-efc87db5cca6",
    "aHref": 'ביטוח רכב',
    "aText": 'ביטוח רכב',
    "iconImg": 'ic-40-px-insurance-car.svg',
    "iconAlt": 'ביטוח רכב'
  }, {
    "id": "5be1cf0f-7c3a-423e-9196-3cf31619fa1d",
    "aHref": 'ביטוח דירה',
    "aText": 'ביטוח דירה',
    "iconImg": 'ic-40-px-insurance-lhome.svg',
    "iconAlt": 'ביטוח דירה'
  }, {
    "id": "1227950e-8a70-4528-9859-3f2feaa7e691",
    "aHref": 'ביטוח חיים',
    "aText": 'ביטוח חיים',
    "iconImg": 'ic-40-px-insurance-life-copy.svg',
    "iconAlt": 'ביטוח חיים'
  }, {
    "id": "be6b2c07-7ef0-4d72-9235-0ebe2bd2bce8",
    "aHref": 'ביטוח סיעוד',
    "aText": 'ביטוח סיעוד',
    "iconImg": 'ic-40-px-insurance-nursing.svg',
    "iconAlt": 'ביטוח סיעוד'
  }, {
    "id": "be3c1eb3-5781-41b8-94a4-e884e68a18e8",
    "aHref": 'ביטוח תאונות אישיות',
    "aText": 'ביטוח תאונות אישיות',
    "iconImg": 'ic-40-px-insurance-personal.svg',
    "iconAlt": 'ביטוח תאונות אישיות'
  }
])
