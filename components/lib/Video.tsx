import { Dialog } from '@mui/material';
import { DataProps } from './types';

interface VideoProps {
	open: boolean;
	close: () => void;
	data: DataProps
}

const Video = ({ open, close, data }: VideoProps) => {
  return (
    <Dialog fullWidth maxWidth={'lg'} open={open} onClose={close}>
      <iframe
        width="100%"
        height="547"
        src={data.videoURL}
        title={data?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </Dialog>
  );
};

export default Video;
