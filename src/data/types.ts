export interface TChuckNorrisJoke {
  categories: string[]; // Массив строк (судя по структуре API)
  created_at: string;   // ISO дата
  icon_url: string;     // URL картинки
  id: string;           // Уникальный идентификатор
  updated_at: string;   // ISO дата
  url: string;          // Ссылка на шутку
  value: string;        // Сам текст шутки
}