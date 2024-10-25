const Button = (prop: any) => {
  return (
    <button
      {...prop}
      className='outline outline-2 outline-white outline-offset-8
  rounded-xl py-[14px] px-5 font-bold mt-8 bg-gradient-to-r from-rose-400 to-yellow-400'
    >
      Claim Free Credit
    </button>
  )
}

export default Button
