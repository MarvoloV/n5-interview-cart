import React, { ChangeEvent } from 'react';
import './inputField.scss';

interface InputFieldProps {
  label: string;
  type: 'text' | 'password' | 'number';
  value: string | number;
  className?: string;
  onChange: (value: string | number) => void;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, value, className, onChange, id }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;


    onChange(newValue);
  };
  return (
    <div className={`input ${className}`}>
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input type={type} id={id} className="input__field" value={value} onChange={handleChange} />
    </div>
  );
};

export default InputField;

