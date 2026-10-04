'use client';

import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { Children, isValidElement, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const EMPTY_VALUE = '__kedi_empty_option__';

/** Shared accessible select. Native option children keep migration call sites readable. */
export default function LiquidSelect({ children, className, placeholder, label, tone = 'light', ...props }: {
  children: ReactNode; className?: string; placeholder?: string; label: string;
  tone?: 'light' | 'dark'; value?: string; defaultValue?: string;
  onValueChange?: (value: string) => void; required?: boolean; disabled?: boolean; name?: string;
}) {
  const options = Children.toArray(children).flatMap(child => {
    if (!isValidElement<{ value?: string; disabled?: boolean; children?: ReactNode }>(child) || child.type !== 'option') return [];
    return [{ value: String(child.props.value ?? ''), disabled: child.props.disabled, label: child.props.children }];
  });
  const emptyOption = options.find(option => option.value === '');
  const allowClear = !!emptyOption && !emptyOption.disabled && !props.required;
  const selectValue = (value: string | undefined) => value === '' && allowClear ? EMPTY_VALUE : value;
  return (
    <Select.Root {...props} value={selectValue(props.value)} defaultValue={selectValue(props.defaultValue)} onValueChange={value => props.onValueChange?.(value === EMPTY_VALUE ? '' : value)}>
      <Select.Trigger data-glass="control" data-glass-tone={tone} aria-label={label} className={cn(className, 'liquid-select-trigger')}>
        <Select.Value placeholder={placeholder ?? emptyOption?.label} />
        <Select.Icon><ChevronDown size={16} /></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content data-glass="menu" data-glass-tone={tone} className="liquid-select-content" position="popper" sideOffset={8} collisionPadding={12}>
          <Select.Viewport className="liquid-select-viewport">
            {options.filter(option => option.value !== '' || allowClear).map(option => (
              <Select.Item key={option.value} value={option.value === '' ? EMPTY_VALUE : option.value} disabled={option.disabled} data-glass="item" className="liquid-select-item">
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator><Check size={16} /></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
