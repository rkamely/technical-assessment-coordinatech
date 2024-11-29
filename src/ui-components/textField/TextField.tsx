import React, {type ForwardedRef, forwardRef, type InputHTMLAttributes, type ReactNode, useId, useState} from 'react';
import {cva} from 'class-variance-authority';
import {Label} from '../label/Label';
import {ErrorTextHelperIcon} from '../../assets/icons/ErrorTextHelperIcon.tsx';
import {TextHelperIcon} from '../../assets/icons/TextHelperIcon.tsx';
import {ShowPassword} from '../../assets/icons/ShowPassword.tsx';
import {CalendarIcon} from "../../assets/icons/CalendarIcon.tsx";
import {clsxMerge} from "../../config/utils.ts";
import Typography from '../typography/Typography.tsx';

const containerVariants = cva(
  'inline-flex flex-col items-start gap-2 transition-colors duration-300 ease-in-out',
  {
    variants: {
      size: {
        medium: '',
        small: '',
      },
      error: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'stroke-slate-400 text-slate-400',
        false: '',
      },
    },
  }
);

const inputContainerVariants = cva(
  'relative flex w-full items-center justify-between gap-2 rounded-lg border px-3 duration-300 ease-in-out',
  {
    variants: {
      size: {
        medium: 'max-h-12 ',
        small: 'max-h-8 ',
      },
      error: {
        true: '',
        false: '',
      },
      disabled: {
        true: '',
        false: '',
      },
    },
  }
);

const inputVariants = cva(
  'flex-1 bg-transparent border-none px-0 text-sm font-medium outline-none transition-all duration-300 ease-in-out ' +
  'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400',
  {
    variants: {
      size: {
        medium: 'py-2.5 h-12 max-h-12',
        small: 'py-2 h-8 max-h-8 ',
      },
      error: {
        true: '',
        false: '',
      },
      startIcon: {
        true: '',
        false: '',
      },
      endIcon: {
        true: '',
        false: '',
      },
    },
  }
);

const iconVariants = cva(
  ' ',

  {
    variants: {
      size: {
        medium: 'max-w-6 [&>svg]:size-6',
        small: 'max-w-4 [&>svg]:size-4',
      },
    },
  }
);

const inputLabelVariants = cva(
  'absolute top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ' +
  'ltr:left-10 ltr:-translate-x-1/2 rtl:right-3  ',
  {
    variants: {
      size: {
        medium: '',
        small: '',
      },
      focus: {
        true: 'top-0 ltr:left-12 rtl:right-3',
        false: '',
      },
      startIcon: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed text-slate-400 ',
        false: 'text-black',
      },
      inputValue: {
        true: 'top-0 ltr:left-10 rtl:right-3',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'medium',
        focus: false,
        startIcon: true,
        inputValue: false,
        class: 'ltr:left-[80px] rtl:right-[35px]',
      },
      {
        size: 'small',
        focus: false,
        startIcon: true,
        inputValue: false,
        class: 'ltr:left-[70px] rtl:right-[30px]',
      },
      {
        size: 'small',
        focus: false,
        class: 'text-[12px] leading-5',
      },
      {
        size: 'small',
        focus: true,
        class: 'text-[10px] leading-4',
      },
      {
        size: 'small',
        inputValue: true,
        class: 'text-[10px] leading-4',
      },
      {
        size: 'medium',
        focus: false,
        class: 'text-[14px] leading-6 ',
      },
      {
        size: 'medium',
        focus: true,
        class: 'text-[12px] leading-5',
      },
      {
        size: 'medium',
        inputValue: true,
        class: 'text-[12px] leading-5',
      },
    ],
  }
);

export interface InputVariants {
  disabled?: boolean;
  endIcon?: boolean;
  error?: boolean;
  size?: 'small' | 'medium';
  startIcon?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Omit<InputVariants, 'startIcon' | 'endIcon'> {
  containerClassName?: string;
  disabled?: boolean;
  clearIcon?: ReactNode;
  clearHandler?: () => void,
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  endIconHandler?: () => void;
  startIconHandler?: () => void;
  helperText?: string;
  label?: string | ReactNode;
  placeholder?: string;
  bgColor?: string;
  textValueColor?: string;
  textLabelColor?: string;
  borderColor?: string;
  borderErrorColor?: string;
  borderFocusedColor?: string;
  fullWidth?: boolean;
  width?: string;
  radius?:number
}

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      className,
      containerClassName,
      label,
      startIcon,
      endIcon,
      clearIcon = <CalendarIcon/>,
      clearHandler,
      helperText,
      bgColor = '#CCCCCC',
      textValueColor = '#242424',
      textLabelColor = textValueColor ?? '#808080',
      borderColor = '#CCCCCC',
      borderErrorColor = '#E54660',
      borderFocusedColor = borderColor ?? '#6F59CA',
      fullWidth = false,
      width = '320px',
      onChange,
      type = 'text',
      startIconHandler,
      endIconHandler,
      radius,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const inputId = useId();
    const helperTextId = useId();

    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [typeInput, setTypeInput] = useState(type);

    return (
      <div
        style={{width: fullWidth ? '100%' : width}}
        className={clsxMerge(containerVariants({error, disabled, size}), containerClassName)}
      >
        <div
          className={clsxMerge(inputContainerVariants({error, disabled, size}))}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{
            backgroundColor: bgColor,
            borderColor: error ? borderErrorColor : focus || hover ? borderFocusedColor : borderColor,
            boxShadow: `0 0 0 1px ${error ? borderErrorColor : focus ? borderFocusedColor : 'transparent'}`,
            borderRadius:radius,
          }}
        >
          {label && (
            <Label
              htmlFor={rest.id ?? inputId}
              size='small'
              color={textLabelColor}
              bgColor={bgColor}
              className={clsxMerge(
                inputLabelVariants({
                  disabled,
                  focus,
                  size,
                  inputValue: Boolean(inputValue),
                  startIcon: Boolean(startIcon),
                }),
                'px-1 '
              )}
            >
              {label}
            </Label>
          )}
          {startIcon && (
            <button
              onClick={() => {
                if (startIconHandler) {
                  startIconHandler();
                }
              }}
              className={`pointer-events-none ${size === 'medium' ? 'max-w-6 [&>svg]:size-6' : 'max-w-4 [&>svg]:size-4'}`}
            >
              {startIcon}
            </button>
          )}
          <div
            className={`flex flex-1 items-center justify-between
           ${typeInput === 'password' || typeInput === 'tel' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <input
              ref={ref}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) {
                  onChange(e);
                }
                setInputValue(e?.target?.value);
              }}
              type={typeInput}
              value={inputValue}
              style={{
                boxShadow: 'none',
                caretColor: error ? borderErrorColor : borderFocusedColor,
                color: textValueColor,
                textAlign: `${typeInput === 'password' || type === 'tel' ? 'left' : 'justify'}`,
              }}
              className={clsxMerge(
                inputVariants({error, size, startIcon: Boolean(startIcon), endIcon: Boolean(endIcon)}),
                className
              )}
              {...rest}
              disabled={disabled}
              aria-disabled={disabled}
              aria-describedby={helperText ? helperTextId : undefined}
              id={rest.id ?? inputId}
            />
            {clearIcon && (
              <button
                onClick={() => {
                  setInputValue('');
                  if (clearHandler) {
                    clearHandler()
                  }
                }}
                className={clsxMerge(
                  iconVariants({
                    size,
                  }),
                )}
              >
                {Boolean(inputValue) && clearIcon}
              </button>
            )}
          </div>

          {type === 'password' ? (
            <button
              onClick={() => {
                if (typeInput === 'password') {
                  setTypeInput('tel');
                } else {
                  setTypeInput('password');
                }
              }}
            >
              <ShowPassword
                style={{cursor: 'pointer'}}
              />
            </button>
          ) : (
            endIcon && (
              <button
                onClick={() => {
                  if (endIconHandler) {
                    endIconHandler();
                  }
                }}
                className={clsxMerge(
                  iconVariants({
                    size,
                  }),
                  'pointer-events-none'
                )}
              >
                {endIcon}
              </button>
            )
          )}
        </div>
        {helperText && (
          <div className={`flex items-center gap-2`}>
            {error ? <ErrorTextHelperIcon/> : <TextHelperIcon/>}
            <Typography
              variant={'Description3'}
              weight={'regular'}
              id={helperTextId}
              color={error ? borderErrorColor : textLabelColor}
            >
              {helperText}
            </Typography>
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
