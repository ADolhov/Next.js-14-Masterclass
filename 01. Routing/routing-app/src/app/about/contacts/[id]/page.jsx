"use client";
const ContactItem = ({params}) => {
  console.log(params)

  return (
    <>
      <h1>{`Contact ${params.id}`}</h1>
    </>
  )
};

export default ContactItem;