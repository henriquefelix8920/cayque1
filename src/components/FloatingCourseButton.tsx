import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FloatingCourseButton() {
  return (
    <a href="#curso" className="floating-course-button" aria-label="Ir para o curso">
      <span className="floating-course-button-ring" aria-hidden="true" />
      <span className="floating-course-button-shine" aria-hidden="true" />
      <span className="floating-course-button-core">
        <Sparkles size={16} />
        <span>Entrar no curso</span>
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
}
