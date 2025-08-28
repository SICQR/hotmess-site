// UTM utility functions as specified in the business requirements
import { UTM } from '../types/utm';

/**
 * Builds UTM parameters and merges them with existing URL parameters
 * Idempotent - calling multiple times with same params won't duplicate
 * @param url - Base URL to append UTM parameters to
 * @param params - UTM parameters to add
 * @returns URL with UTM parameters appended
 */
export function buildUtm(url: string, params: UTM): string {
  try {
    const urlObj = new URL(url);
    
    // Add UTM parameters if provided
    if (params.source) urlObj.searchParams.set('utm_source', params.source);
    if (params.medium) urlObj.searchParams.set('utm_medium', params.medium);
    if (params.campaign) urlObj.searchParams.set('utm_campaign', params.campaign);
    if (params.content) urlObj.searchParams.set('utm_content', params.content);
    if (params.term) urlObj.searchParams.set('utm_term', params.term);
    
    return urlObj.toString();
  } catch (error) {
    console.warn('Failed to build UTM URL:', error);
    return url;
  }
}

/**
 * Extracts UTM parameters from current URL
 * @returns UTM object with current parameters
 */
export function getUtmFromUrl(): UTM {
  if (typeof window === 'undefined') return {};
  
  try {
    const url = new URL(window.location.href);
    return {
      source: url.searchParams.get('utm_source') || undefined,
      medium: url.searchParams.get('utm_medium') || undefined,
      campaign: url.searchParams.get('utm_campaign') || undefined,
      content: url.searchParams.get('utm_content') || undefined,
      term: url.searchParams.get('utm_term') || undefined,
    };
  } catch (error) {
    console.warn('Failed to extract UTM from URL:', error);
    return {};
  }
}

/**
 * Preserves existing UTM parameters when navigating
 * @param href - Target URL
 * @returns URL with preserved UTM parameters
 */
export function preserveUtm(href: string): string {
  const currentUtm = getUtmFromUrl();
  
  // Only preserve if we have UTM data
  if (Object.values(currentUtm).some(value => value)) {
    return buildUtm(href, currentUtm);
  }
  
  return href;
}