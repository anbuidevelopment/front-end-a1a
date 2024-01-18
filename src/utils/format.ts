import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('dd/MM/yyyy HH:mm:ss');

export const customStyles: Record<string, React.CSSProperties> = {
  color1: { background: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)' },
  color2: { background: 'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)' },
};
