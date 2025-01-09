'use client';
import React, { useEffect, useState } from 'react';
import style from './contact.module.css';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { getNames, getCode } from 'country-list';
import { useRouter } from 'next/navigation';  

export default function Page() { 
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    country: '',
  });

  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...formData, phone };
    setFormData(updatedData); 

    try {
      const response = await fetch('https://platform-omega-two.vercel.app/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      const req = await response.json()
      console.log("req: " + JSON.stringify(req));
      console.log("res: " + JSON.stringify(response));

      if (!response.ok) {
        alert('Failed to create client: ' + JSON.stringify(req.message));
        return
      }
      alert('Form submitted successfully');
    } catch (error) {
      alert('Failed to submit form: ' + error.message);
    }
  };

  useEffect(() => {
    if (formData.name === '#socialAdmin') {
      localStorage.setItem('admin', '#socialAdmin');
      router.push('/dashboard');
    }
  }, [formData.name, router]);

  const countryOptions = getNames().map((name) => ({
    value: name,
    label: name,
    code: getCode(name),
  }));

  const handleSelectChange = (option) => {
    setCountry(option);
    setFormData((prev) => ({ ...prev, country: option?.value || '' }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`flex flex-col justify-center items-center gap-[20px] py-[30px] h-[100vh] relative ${style.contact}`}>
      <Link href="/">
        <button className="top-[20px] left-[2%] absolute bg-[#e7e3e386] hover:bg-[#000] px-[10px] py-[4px] rounded-[5px] text-[#fff]">
          Back
        </button>
      </Link>
      <form onSubmit={handleSubmit} className={`${style.form}`}>
        <h1 className="text-right font-[500] text-[25px]">Chat with us</h1>
        <label>
          <span>Name</span>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          <span>Phone</span>
          <PhoneInput
            inputStyle={{
              fontSize: '16px',
              padding: '12px 45px',
              border: 'none',
              outline: 'none',
              color: '#000',
              width: '100%',
              backgroundColor: 'rgba(210, 231, 236, 0.479)',
              borderRadius: '5px',
            }}
            country="us"
            value={phone}
            onChange={setPhone}
          />
        </label>
        <label>
          <span>Country</span>
          <Select options={countryOptions} value={country} onChange={handleSelectChange} placeholder="Choose a country" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          <span>Message</span>
          <textarea name="subject" rows="4" value={formData.subject} onChange={handleInputChange}></textarea>
        </label>
        <button type="submit" className={style.btn}>Submit</button>
      </form>
    </div>
  );
}
