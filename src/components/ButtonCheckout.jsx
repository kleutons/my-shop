"use client";

function ButtonCheckout({ listItems }) {
  return (
    <button
      className="bg-sky-500 text-white px-4 py-2 rounded"
      onClick={async () => {
        const res = await fetch('/api/checkout', {
            method: 'POST',
            body: JSON.stringify({
                listItems
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        window.location.href = data.url
      }}
    >
      Buy
    </button>
  );
}

export default ButtonCheckout;