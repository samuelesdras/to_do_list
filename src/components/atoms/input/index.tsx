import {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  Ref,
  useEffect,
  useState,
} from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  iconName?: string;
  value?: string;
}

function Input(
  { placeholder, label, iconName, value, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (rest.onChange) {
      rest.onChange(e);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label className="text-xs">{label}</label>}
      <div className="relative flex items-center">
        <input
          placeholder={placeholder}
          className={`pl-2 rounded px-2 py-1 text-slate-950`}
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
