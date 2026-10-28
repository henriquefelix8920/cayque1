const WhatsAppMark = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="floating-whatsapp-logo">
    <path fill="currentColor" d="M24 4.2A19.7 19.7 0 0 0 7 34l-2.1 8 8.2-2.1A19.8 19.8 0 1 0 24 4.2Zm0 35.8c-3.2 0-6.2-.9-8.8-2.6l-.6-.4-4.9 1.3 1.3-4.8-.4-.6A15.7 15.7 0 1 1 24 40Zm8.7-11.6c-.5-.3-2.8-1.4-3.3-1.6-.4-.2-.8-.3-1.1.3-.3.5-1.2 1.6-1.4 1.9-.3.3-.5.4-1 .1-.5-.3-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.8.2-1.1.2-.2.5-.6.8-.9.3-.3.3-.5.5-.9.2-.3.1-.7 0-1-.1-.3-1.1-2.6-1.5-3.5-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.9.1-1.3.6-.4.5-1.7 1.7-1.7 4.1s1.7 4.8 1.9 5.1c.2.3 3.3 5.1 8 7.1 1.1.5 2 .8 2.7 1 .1 0 .2 0 .3.1 1.1.3 2.1.2 2.9.1.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2.1.3-2.2-.1-.2-.4-.3-.9-.6Z" />
  </svg>
);

export default function FloatingCourseButton() {
  return (
    <a href="#" className="floating-course-button" aria-label="Abrir WhatsApp — link ainda não configurado">
      <span className="floating-course-button-ring" aria-hidden="true" />
      <span className="floating-course-button-shine" aria-hidden="true" />
      <span className="floating-course-button-core">
        <WhatsAppMark />
      </span>
    </a>
  );
}
