const REGEX_FORMAT = /YYYY|M|D|dddd|HH|mm/g;
const MS_A_DAY = 24 * 60 * 60 * 1000;
const MS_A_WEEK = MS_A_DAY * 7;

export type IDate = number | string | Date;

type DateFormats = {
  [p: string]: string;
};

export interface TimeLocale {
  weekdays: string[];
  formats: DateFormats;
}

export const defaultLocale: TimeLocale = {
  weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  formats: {
    LT: 'HH:mm',
    YT: '昨天 HH:mm',
    WT: 'dddd HH:mm',
    lll: 'YYYY年M月D日 HH:mm',
  },
};

const parseDate = (date: IDate) => {
  if (date instanceof Date) {
    return date;
  }
  return new Date(date);
};

const getWeeHours = () => new Date(new Date().setHours(0, 0, 0, 0));

const padStart = (n: number) => (n <= 9 ? '0' : '') + n;

const getFormat = (date: Date) => {
  const diff = getWeeHours().getTime() - date.getTime();

  if (diff < 0) {
    return 'LT'; // 今天
  }
  if (diff < MS_A_DAY) {
    return 'YT'; // 昨天
  }
  if (diff < MS_A_WEEK) {
    return 'WT'; // 这周
  }
  return 'lll';
};

export function formatDate(date: IDate, locale: TimeLocale = defaultLocale): string {
  const $d = parseDate(date);
  const format = locale.formats[getFormat($d)];

  const dates: DateFormats = {
    YYYY: `${$d.getFullYear()}`,
    M: `${$d.getMonth() + 1}`,
    D: `${$d.getDate()}`,
    dddd: locale.weekdays[$d.getDay()],
    HH: padStart($d.getHours()),
    mm: padStart($d.getMinutes()),
  };

  return format.replace(REGEX_FORMAT, (match) => dates[match]);
}
