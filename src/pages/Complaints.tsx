const ComplaintsPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSfTY5f7NeQ6Kq9vojZ_-IjNs38clresMLKVkl9uWPTM3upg1w/viewform?usp=header'
        width='640'
        height='1200'
        frameBorder='0'
        marginHeight={0}
        marginWidth={0}
        title='Complaints Form'
        className='w-full max-w-3xl rounded-lg shadow-lg border'
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ComplaintsPage;
