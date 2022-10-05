type SvgIconProps = {
  fill?: string;
};

const TickIcon = ({ fill }: SvgIconProps) => (
  <svg
    width='32'
    height='40'
    viewBox='0 0 32 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 0L0 6V18.18C0 28.28 6.82 37.7 16 40C25.18 37.7 32 28.28 32 18.18V6L16 0ZM28 18.18C28 26.18 22.9 33.58 16 35.84C9.1 33.58 4 26.2 4 18.18V8.62L16 4.38L28 8.62V18.18ZM9.64 17.18L6.8 20L13.88 27.08L25.2 15.76L22.38 12.94L13.9 21.42L9.64 17.18Z'
      fill={fill}
    />
  </svg>
);
export default TickIcon;
