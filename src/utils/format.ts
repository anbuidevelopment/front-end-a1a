import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('dd/MM/yyyy HH:mm:ss');

export const splitItem = (item: string) => item.split(/\||\n/);
export const splitItemJoin = (item: string) => item.split('|').join('\n');
export  function extractLastName(fullName: string): string | null {
  const names = fullName.split(' ');
  if (names.length > 0) {
    return names[names.length - 1];
  }
  return null;
}


export const customStyles: Record<string, React.CSSProperties> = {
  color1: { background: 'linear-gradient(132deg,#4776E6 0%, #8E54E9 100%)' },
  color2: { background: 'linear-gradient(90deg, #aa4b6b 0%, #6b6b83 50% , #3b8d99 100%)',color:'#FFFFFF' },
  color3: { background: '#FDCF76', color: 'black' },
  color4: { background: '#F25E7A', color: 'white' },
  color5: { background: '#0487D9', color: 'white' },
  color6: { background: '#36BF3F', color: 'white' },
  color7: { background: '#8E54E9', color: 'white' },
};
