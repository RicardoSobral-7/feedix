import styles from "./Avatar.module.css";

interface AvatarProps {
  avatarURL: string;
  hasBorder?: boolean;
}

export function Avatar({ avatarURL, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarURL}
    />
  );
}
