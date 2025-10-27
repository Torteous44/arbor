import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitingListModal = ({ isOpen, onClose }: WaitingListModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Join the Waiting List">
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-brand-green" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">Thank You!</h3>
          <p className="text-black/70">
            We've added you to our waiting list. We'll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-black/20 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              className="mr-2"
              required
            />
            <label htmlFor="consent" className="text-sm text-black/70">
              I agree to receive updates about Arbor
            </label>
          </div>
          <div className="pt-4">
            <Button 
              type="submit" 
              variant="solid" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join Waiting List"}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};