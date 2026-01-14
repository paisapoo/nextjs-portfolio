export default function HeroHome() {
  return (
    <>
      <section className='h-[50vh] md:min-h-screen flex items-center bg-[url("/_assets/background/bg-blue.png")] bg-fill bg-center py-20 lg:py-40'>
        <div className='container  mx-auto px-4 text-center'>
          <h1 className='font-jua font-bold  text-4xl md:text-8xl/32 '>
            <span
              className='block text-transparent mb-4'
              style={{
                WebkitTextStroke: '.5px rgba(255, 255, 255, 0.3)',
              }}
            >
              Welcome to
            </span>
            <span className='block text-white'>My Portfolio</span>
          </h1>
        </div>
      </section>
    </>
  );
}
