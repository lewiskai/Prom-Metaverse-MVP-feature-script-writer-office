type Props = {
  handleClick: () => void,
  clasName?: string,
}
const ArrowLeft: React.FC<Props> = ({
  handleClick,
  clasName,
}) => {
  return (
    <button type="button"
      className={clasName}
      onClick={handleClick}>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13.5" cy="13.5" r="13.5" fill="#DC1720" />
        <path d="M17.1455 18.3613L17.1455 8.00132C17.1455 7.21132 16.2755 6.73132 15.6055 7.16132L7.46551 12.3413C7.323 12.4315 7.20561 12.5563 7.12427 12.704C7.04293 12.8518 7.00027 13.0177 7.00027 13.1863C7.00027 13.355 7.04293 13.5209 7.12427 13.6686C7.20561 13.8164 7.323 13.9411 7.46551 14.0313L15.6055 19.2013C15.7563 19.2989 15.9307 19.3539 16.1102 19.3606C16.2897 19.3673 16.4677 19.3255 16.6254 19.2395C16.7831 19.1535 16.9147 19.0265 17.0062 18.8719C17.0977 18.7174 17.1459 18.541 17.1455 18.3613Z" fill="white" />
        <path d="M17.1455 18.3613L17.1455 8.00132C17.1455 7.21132 16.2755 6.73132 15.6055 7.16132L7.46551 12.3413C7.323 12.4315 7.20561 12.5563 7.12427 12.704C7.04293 12.8518 7.00027 13.0177 7.00027 13.1863C7.00027 13.355 7.04293 13.5209 7.12427 13.6686C7.20561 13.8164 7.323 13.9411 7.46551 14.0313L15.6055 19.2013C15.7563 19.2989 15.9307 19.3539 16.1102 19.3606C16.2897 19.3673 16.4677 19.3255 16.6254 19.2395C16.7831 19.1535 16.9147 19.0265 17.0062 18.8719C17.0977 18.7174 17.1459 18.541 17.1455 18.3613Z" fill="white" />
      </svg>

    </button>
  )
}

export default ArrowLeft;