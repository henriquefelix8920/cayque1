import { MessageCircle } from 'lucide-react';

export default function FloatingCourseButton() {
  return <a href="#oferta" className="floating-course-button" aria-label="Ver oferta da Comunidade dos Ritmos">
    <span className="floating-course-button-ring" aria-hidden="true"/>
    <span className="floating-course-button-shine" aria-hidden="true"/>
    <span className="floating-course-button-core"><MessageCircle size={28} aria-hidden="true"/></span>
  </a>;
}
