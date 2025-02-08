const Banner = () => {
  return (
    <section className="bg-banner h-[355px] container mx-auto bg-cover bg-center py-10 px-14 text-white flex items-center">
      <div className="space-y-2 max-w-[446px] w-full">
        <h5 className="text-[#DC582A] text-2xl font-medium">Trending now</h5>
        <h1 className="font-bold text-[2.5rem]">
          Mike’s famous salad with cheese
        </h1>
        <small className="font-medium text-xl ">By John Mike</small>
      </div>
    </section>
  );
};

export default Banner;
