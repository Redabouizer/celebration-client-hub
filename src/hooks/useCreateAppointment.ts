
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock appointment creation
      const appointment = {
        id: Math.random().toString(36).substr(2, 9),
        ...data,
        patient_id: '1', // Mock patient ID
        status: 'pending',
        created_at: new Date().toISOString()
      };

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
