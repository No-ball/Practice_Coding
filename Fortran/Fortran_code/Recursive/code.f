      program Recursive

      !set usings
      interface
            subroutine loop(i)
                  integer, intent(in) :: i
            end subroutine
      end interface

      call loop(10)
      end program Recursive

      recursive subroutine loop (i)

      !set usings
      implicit none
      integer, intent(in) ::i

      !End the program while function had ran i times
      if (i < 0) then
      write(*,*)
      return
      endif

      !write i
      write(*,200) i
200     format(i2,""$)
      
      !call the function again
      call loop (i - 1)

      
      end subroutine loop
