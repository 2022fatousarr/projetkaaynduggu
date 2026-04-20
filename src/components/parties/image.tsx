import type { imageProps } from "./type";

export default function Image({ src, alt, className }: imageProps) {
	return <img src={src} alt={alt} className={className} style={{ border: 'none' }} />;
}

// Composant simple : affiche une image sans interaction.