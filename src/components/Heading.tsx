import mq from '@/breakpoints';

function Heading() {
  return (
    <div>
      <h1
        css={(theme) =>
          mq({
            color: theme.colors.green,
            fontSize: ['26px', '48px', '52px'],
          })
        }
      >
        PUBLISH YOUR PODCASTS
      </h1>
      <h1
        css={(theme) =>
          mq({
            color: theme.colors.white,
            fontSize: ['26px', '48px', '52px'],
          })
        }
      >
        EVERYWHERE.
      </h1>
    </div>
  );
}

export default Heading;
