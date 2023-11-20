//
export default function useDateTime() {
  const datetime = () => {
    const date = new Date().toLocaleDateString("es-DO");
    const time = new Date().toLocaleTimeString("es-DO");
    return `${date} ${time}`;
  };
  
  const time = () => {
    const time = new Date().toLocaleTimeString("es-DO");
    return time;
  };
  
  const date = () => {
    const date = new Date().toLocaleDateString("es-DO");
    return date;
  };

  return [datetime, date, time];
}
