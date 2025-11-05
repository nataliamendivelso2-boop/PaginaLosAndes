const MONTH_MAP = {
  enero: '01',
  febrero: '02',
  marzo: '03',
  abril: '04',
  mayo: '05',
  junio: '06',
  julio: '07',
  agosto: '08',
  septiembre: '09',
  setiembre: '09',
  octubre: '10',
  noviembre: '11',
  diciembre: '12',
};

export const toIsoDate = (value) => {
  if (!value) {
    return undefined;
  }

  const match = value
    .toLowerCase()
    .match(/(\d{1,2})\s+de\s+([a-zñ]+)\s+de\s+(\d{4})/i);

  if (!match) {
    return undefined;
  }

  const [, day, monthName, year] = match;
  const month = MONTH_MAP[monthName];

  if (!month) {
    return undefined;
  }

  return `${year}-${month}-${day.padStart(2, '0')}`;
};
