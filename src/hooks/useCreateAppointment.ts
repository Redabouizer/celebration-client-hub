
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface CreateAppointmentData {
  doctor_id: string;
  service_id: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
  symptoms?: string;
}

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateAppointmentData) => {
      const { data: user } = await supabase.auth.getUser();
      
      if (!user.user) {
        throw new Error('User not authenticated');
      }

      const { data: appointment, error } = await supabase
        .from('appointments')
        .insert({
          ...data,
          patient_id: user.user.id,
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      return appointment;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
      toast.success('Appointment booked successfully! We will contact you shortly.');
    },
    onError: (error) => {
      console.error('Error creating appointment:', error);
      toast.error('Failed to book appointment. Please try again.');
    },
  });
};
