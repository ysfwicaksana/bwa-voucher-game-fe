import Image from 'next/image';
import Link from 'next/link';
export interface imageGameProps {
  imageGame:
    | '/img/Thumbnail-1.png'
    | '/img/Thumbnail-2.png'
    | '/img/Thumbnail-3.png'
    | '/img/Thumbnail-4.png'
    | '/img/Thumbnail-5.png';

  title: string;
  platform: string;
}

export default function GameItems(props: imageGameProps) {
  const { imageGame, title, platform } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <img
              className="thumbnail"
              src={imageGame}
              width="205"
              height="270"
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" width={54} height={36} />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
