import Card from "react-bootstrap/Card";

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
}

function NewsCard({
  title,
  description,
  imageUrl,
  source,
  publishedAt,
}: NewsCardProps) {
  return (
    <Card className="news-card">
      <Card.Img src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>
          <strong>Source:</strong> {source}
        </p>
        <p>
          <strong>Published At:</strong>{" "}
          {new Date(publishedAt).toLocaleString()}
        </p>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
