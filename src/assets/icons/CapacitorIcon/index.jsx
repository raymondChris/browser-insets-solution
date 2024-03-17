const CapacitorIcon = ({ fill = 'black' }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M480 101.09L372.37 208.72L479.23 315.78L409.93 385.08L126.71 101.85L196 32.54L303.07 139.42L410.67 32L480 101.09Z"
        fill={fill}
      />
      <path
        d="M32.55 196L101.85 126.69L385.07 409.93L315.77 479.23L208.77 372.36L101.08 480L32 410.67L139.42 303.06L32.55 196Z"
        fill={fill}
      />
    </svg>
  );
};

export default CapacitorIcon;
