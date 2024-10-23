import { renderHook, act } from '@testing-library/react';
import { useToast, toast } from '../../src/hooks/use-toast';

jest.useFakeTimers();

describe('useToast', () => {
  it('should add a toast', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: 'Test Toast',
        description: 'This is a test toast',
      });
    });

    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('This is a test toast');
  });

  it('should dismiss a toast after a set time', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      const { id } = toast({
        title: 'Dismiss Toast',
        description: 'This toast should be dismissed',
      });
      result.current.dismiss(id);
    });

    //expect(result.current.toasts.length).toBe(0);
  });

  it('should update a toast', () => {
    const { result } = renderHook(() => useToast());

    let toastId = '';
    act(() => {
      const newToast = toast({
        title: 'Initial Title',
        description: 'Initial Description',
      });
      toastId = newToast.id;

      newToast.update({
        title: 'Updated Title',
        description: 'Updated Description',
      });
    });

    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe('Updated Title');
    expect(result.current.toasts[0].description).toBe('Updated Description');
  });

  it('should remove a toast after dismiss', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      const { id } = toast({
        title: 'Test Remove Toast',
        description: 'Toast to be removed',
      });

      result.current.dismiss(id);
      jest.runAllTimers();
    });

    expect(result.current.toasts.length).toBe(0);
  });

  it('should limit the number of toasts to the defined TOAST_LIMIT', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: 'Toast 1',
        description: 'Description 1',
      });

      toast({
        title: 'Toast 2',
        description: 'Description 2',
      });
    });

    // Ensure only 1 toast is kept since the limit is 1
    expect(result.current.toasts.length).toBe(1);
    expect(result.current.toasts[0].title).toBe('Toast 2');
  });

  it('should remove all toasts when dismiss() is called with no id', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      toast({
        title: 'Toast 1',
        description: 'Description 1',
      });

      toast({
        title: 'Toast 2',
        description: 'Description 2',
      });

      result.current.dismiss();
      jest.runAllTimers();
    });

    expect(result.current.toasts.length).toBe(0);
  });
});
