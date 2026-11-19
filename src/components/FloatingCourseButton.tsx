import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5522981875611?text=' + encodeURIComponent('Olá, Cayque! Vim pela Comunidade dos Ritmos e gostaria de conversar.');

export default function FloatingCourseButton() {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="floating-course-button" aria-label="Conversar com Cayque no WhatsApp">
    <span className="floating-course-button-ring" aria-hidden="true"/>
    <span className="floating-course-button-shine" aria-hidden="true"/>
    <span className="floating-course-button-core"><MessageCircle size={30} className="floating-whatsapp-logo" aria-hidden="true"/></span>
  </a>;
}
