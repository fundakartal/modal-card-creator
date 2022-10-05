import Image from 'next/image';
import Button from '../../button';
import Modal from '../../modal';
import { RootState } from '../../../../app/store';
import { useSelector } from 'react-redux';


const Modal2 = () => {
  const data = new Map(
    Object.entries(useSelector((state: RootState) => state.selectedModal.data))
  );
  const Size = data.get('Size');
  const Position = data.get('Position');
  const Content1 = data.get('Content1');
  const Content2 = data.get('Content2');
  const Content3 = data.get('Content3');
  const Content4 = data.get('Content4');
  const Color1 = data.get('Color1');
  const Color2 = data.get('Color2');
  const Color3 = data.get('Color3');
  const Color4 = data.get('Color4');

  return (
    <div
      className={`grid h-full w-full bg-black bg-opacity-5 
    ${
      Position === 'Top'
        ? 'items-start'
        : Position === 'Right'
        ? 'justify-end'
        : Position === 'Bottom'
        ? 'items-end'
        : Position === 'Left'
        ? 'justify-start'
        : Position === 'LeftTop'
        ? 'items-start justify-start'
        : Position === 'RightTop'
        ? 'items-start justify-end'
        : Position === 'RightBottom'
        ? 'items-end justify-end'
        : Position === 'LeftBottom'
        ? 'items-end justify-start'
        : 'place-items-center'
    }`}
    >
      <Modal
        className={`relative flex ${
          Size === 'Small'
            ? 'h-[440px] w-[420px]'
            : Size === 'Large'
            ? 'h-[650px] w-[550px]'
            : 'h-[600px] w-[480px]'
        } flex-col items-center rounded-xl bg-white`}
      >
        <Image
          src='/images/Modal2/img.svg'
          alt=''
          width={480}
          height={300}
          layout='fixed'
          priority={true}
        />
        <div className='flex flex-col items-center justify-center py-10'>
          <h1 className='text-3xl font-bold'>{Content1}</h1>
          <h2 className='mt-5 mb-7 text-xl leading-6'>
          {Content2}
          </h2>
          <div className='flex flex-col gap-4'>
            <Button
              className={`grid h-12 w-350 place-content-center rounded-lg bg-primary py-4 font-medium leading-5 text-white transition duration-300 hover:bg-primary-dark`}
            >
              {Content3}
            </Button>
            <Button
              className={`grid h-12 place-content-center rounded-lg border border-gray-extra-light bg-white py-4 font-medium leading-5 text-black transition duration-300`}
            >
              {Content4}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Modal2;
