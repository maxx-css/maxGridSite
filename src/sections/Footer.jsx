const Footer = () => {
  return (
    <footer className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className='flex gap-3'>
        <a className='social-icon' href='https://github.com/maxx-css' target="blank">
          <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2' />
        </a>
      </div>

      <p className='text-white-500'>© 2025 Max Rivera. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
