export interface Page {
  name: string;
  route: string;
  role: string;
  sections: Section[];
}
export interface Section {
  flex: string; // 'row' or 'column'
  width: 'full' | 'page'; // 'full' = 100% width, 'page' = global page width
  content: Content[];
}
export interface Content {
  type: string; // 'p', 'h1', 'h2', 'button', etc.
  content: string;
  align: 'top-left' | 'top-center' | 'top-right' |
  'middle-left' | 'middle-center' | 'middle-right' |
  'bottom-left' | 'bottom-center' | 'bottom-right';
}