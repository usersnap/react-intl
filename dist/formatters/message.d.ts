import { Formatters, IntlConfig, MessageDescriptor } from '../types';
import { PrimitiveType } from 'intl-messageformat';
export declare function formatMessage({ locale, formats, messages, defaultLocale, defaultFormats, onError, }: Pick<IntlConfig, 'locale' | 'formats' | 'messages' | 'defaultLocale' | 'defaultFormats' | 'onError'>, state: Formatters, messageDescriptor?: MessageDescriptor, values?: Record<string, PrimitiveType>): string;
export declare function formatHTMLMessage(config: Pick<IntlConfig, 'locale' | 'formats' | 'messages' | 'defaultLocale' | 'defaultFormats' | 'onError'>, state: Formatters, messageDescriptor?: MessageDescriptor, rawValues?: Record<string, PrimitiveType>): string;
