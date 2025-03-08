export interface ContentWithHref {
    type: string;
    content: string;
    href: string;
  }
  
export  interface ContentWithImage {
    type: string;
    src: string;
    alt: string;
  }
  
export  interface ContentWithText {
    type: string;
    content: string;
  }
  
  type SectionContent = ContentWithHref | ContentWithImage | ContentWithText;
  